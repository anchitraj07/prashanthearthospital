'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, Appointment } from '@/lib/supabase';

type FilterStatus = 'all' | 'pending' | 'confirmed' | 'cancelled';

const STATUS_COLORS: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  confirmed: 'bg-green-100 text-green-800 border-green-200',
  cancelled: 'bg-red-100 text-red-800 border-red-200',
};

export default function AdminDashboardPage() {
  const router = useRouter();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterStatus>('all');
  const [search, setSearch] = useState('');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const checkAuth = useCallback(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('phh_admin_token');
      if (!token) {
        router.replace('/admin/login');
      }
    }
  }, [router]);

  const fetchAppointments = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAppointments(data || []);
    } catch (err) {
      console.error('Failed to fetch appointments:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
    fetchAppointments();
  }, [checkAuth, fetchAppointments]);

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const { error } = await supabase
        .from('appointments')
        .update({ appt_status: newStatus })
        .eq('id', id);

      if (error) throw error;
      setAppointments((prev) =>
        prev.map((a) => (a.id === id ? { ...a, appt_status: newStatus } : a))
      );
    } catch (err) {
      console.error('Status update failed:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('phh_admin_token');
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
      {/* Header */}
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
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
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
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Appointments', value: stats.total, color: 'text-[#0A1628]', bg: 'bg-white', icon: '📋' },
            { label: "Today's Appointments", value: stats.today, color: 'text-blue-700', bg: 'bg-blue-50', icon: '📅' },
            { label: 'Pending', value: stats.pending, color: 'text-yellow-700', bg: 'bg-yellow-50', icon: '⏳' },
            { label: 'Confirmed', value: stats.confirmed, color: 'text-green-700', bg: 'bg-green-50', icon: '✅' },
          ].map((stat) => (
            <div key={stat.label} className={`${stat.bg} rounded-2xl p-5 shadow-sm border border-gray-100`}>
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {(['all', 'pending', 'confirmed', 'cancelled'] as FilterStatus[]).map((f) => (
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

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <svg className="w-8 h-8 animate-spin text-[#40c1b9]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span className="ml-3 text-gray-500">Loading appointments...</span>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-gray-500 text-lg">No appointments found</p>
              <p className="text-gray-400 text-sm mt-1">
                {search ? 'Try a different search term' : 'Appointments will appear here once booked'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-5 py-4 text-gray-500 font-semibold text-xs uppercase tracking-wider">Patient</th>
                    <th className="text-left px-5 py-4 text-gray-500 font-semibold text-xs uppercase tracking-wider">Contact</th>
                    <th className="text-left px-5 py-4 text-gray-500 font-semibold text-xs uppercase tracking-wider">Service</th>
                    <th className="text-left px-5 py-4 text-gray-500 font-semibold text-xs uppercase tracking-wider">Date & Time</th>
                    <th className="text-left px-5 py-4 text-gray-500 font-semibold text-xs uppercase tracking-wider">Status</th>
                    <th className="text-left px-5 py-4 text-gray-500 font-semibold text-xs uppercase tracking-wider">Booked On</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map((appt) => (
                    <tr key={appt.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="font-semibold text-[#0A1628]">{appt.full_name}</div>
                        {appt.message && (
                          <div className="text-gray-400 text-xs mt-0.5 max-w-[180px] truncate" title={appt.message}>
                            {appt.message}
                          </div>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <div className="text-[#0A1628]">{appt.phone}</div>
                        {appt.email && <div className="text-gray-400 text-xs mt-0.5">{appt.email}</div>}
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-[#40c1b9]/10 text-[#0A1628] text-xs font-medium">
                          {appt.service}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="text-[#0A1628] font-medium">{appt.preferred_date}</div>
                        {appt.preferred_time && (
                          <div className="text-gray-400 text-xs mt-0.5">{appt.preferred_time}</div>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <select
                          value={appt.appt_status || 'pending'}
                          onChange={(e) => handleStatusUpdate(appt.id!, e.target.value)}
                          disabled={updatingId === appt.id}
                          className={`px-3 py-1.5 rounded-lg border text-xs font-semibold capitalize cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#40c1b9] transition-all disabled:opacity-50 ${
                            STATUS_COLORS[appt.appt_status || 'pending'] || STATUS_COLORS.pending
                          }`}
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="px-5 py-4 text-gray-400 text-xs">
                        {appt.created_at
                          ? new Date(appt.created_at).toLocaleDateString('en-IN', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                            })
                          : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">
          Prashant Heart Hospital Admin Panel • {filtered.length} of {appointments.length} appointments shown
        </p>
      </div>
    </div>
  );
}
