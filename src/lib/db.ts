/**
 * Supabase client for Manaforge Press
 * Lazy-loaded to avoid build-time crashes when env vars are absent
 */
import { createClient, SupabaseClient } from '@supabase/supabase-js';

let _supabase: SupabaseClient | null = null;

function getSupabase(): SupabaseClient {
  if (_supabase) return _supabase;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error('Supabase credentials not configured');
  }

  _supabase = createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  return _supabase;
}

/**
 * Add email to subscribers list
 */
export async function subscribe(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    const supabase = getSupabase();
    const { error } = await supabase
      .from('subscribers')
      .upsert({ email }, { onConflict: 'email' });

    if (error) {
      console.error('Subscribe error:', error);
      return { success: false, error: 'Failed to subscribe' };
    }

    return { success: true };
  } catch (err) {
    console.error('Subscribe error:', err);
    return { success: false, error: 'Service unavailable' };
  }
}
