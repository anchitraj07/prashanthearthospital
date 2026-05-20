'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Appointment } from '@/lib/supabase';

const STATUS_COLORS: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  confirmed: 'bg-green-100 text-green-800 border-green-200',
  cancelled: 'bg-red-100 text-red-800 border-red-200',
};

export default function AdminDashboardClient() {
  const router = useRouter();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all');
  const [search, setSearch] = useState('');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/appointments', { method: 'GET' });
      if (!response.ok) throw new Error('Failed to fetch appointments');
      const data = await response.json();
      setAppointments(data.appointments || []);
    } catch (err) {
      console.error('Failed to fetch appointments:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const response = await fetch(`/api/admin/appointments/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Status update failed');
      }

      setAppointments((prev) =>
        prev.map((a) => (a.id === id ? { ...a, appt_status: newStatus } : a))
      );
    } catch (err) {
      console.error('Status update failed:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
    } catch (err) {
      console.error('Logout failed:', err);
    }
    router.push('/admin/login');
  };

  const filtered = appointments.filter((a) => {
    const matchesFilter = filter === 'all' || a.appt_status === filter;
    const matchesSearch =
      !search ||
      a.full_name.toLowerCase().includes(search.toLowerCase()) ||
      a.phone.includes(search);
    return matchesFilter && matchesSearch;
  });

  const stats = {
    total: appointments.length,
    today: appointments.filter((a) => {
      const today = new Date().toISOString().split('T')[0];
      return a.preferred_date === today;
    }).length,
    pending: appointments.filter((a) => a.appt_status === 'pending').length,
    confirmed: appointments.filter((a) => a.appt_status === 'confirmed').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#0A1628] text-white px-6 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-2xl">❤️</span>
          <div>
            <h1 className="font-bold text-lg leading-tight">Prashant Heart Hospital</h1>
            <p className="text-white/50 text-xs">Admin Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={fetchAppointments}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Refresh
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 text-sm font-medium transition-all"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: 'Total Appointments',
              value: stats.total,
              color: 'text-[#0A1628]',
              bg: 'bg-white',
              icon: '📋',
            },
            {
              label: "Today's Appointments",
              value: stats.today,
              color: 'text-blue-700',
              bg: 'bg-blue-50',
              icon: '📅',
            },
            {
              label: 'Pending',
              value: stats.pending,
              color: 'text-yellow-700',
              bg: 'bg-yellow-50',
              icon: '⏳',
            },
            {
              label: 'Confirmed',
              value: stats.confirmed,
              color: 'text-green-700',
              bg: 'bg-green-50',
              icon: '✅',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`${stat.bg} rounded-2xl p-5 shadow-sm border border-gray-100`}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {(['all', 'pending', 'confirmed', 'cancelled'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                    filter === f
                      ? 'bg-[#0A1628] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {f === 'all' ? `All (${stats.total})` : f}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or phone..."
              className="w-full sm:w-64 px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#40c1b9] focus:border-transparent"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <svg className="w-8 h-8 animate-spin text-[#40c1b9]" fill="none" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-10 text-center text-sm text-gray-500">
                        No appointments found.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((appointment) => (
                      <tr key={appointment.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {appointment.full_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {appointment.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {appointment.preferred_date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {appointment.service}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                              STATUS_COLORS[appointment.appt_status || 'pending'] ||
                              STATUS_COLORS.pending
                            }`}
                          >
                            {appointment.appt_status || 'pending'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                          {['pending', 'confirmed', 'cancelled'].map((status) => (
                            <button
                              key={status}
                              onClick={() => handleStatusUpdate(appointment.id!, status)}
                              disabled={updatingId === appointment.id}
                              className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 transition"
                            >
                              {status}
                            </button>
                          ))}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
