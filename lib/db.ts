import { createClient } from '@supabase/supabase-js'

// Get Supabase configuration from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Log missing environment variables
if (!supabaseUrl) {
  console.error('[v0] Missing NEXT_PUBLIC_SUPABASE_URL environment variable. Add it to your .env.local file.')
}

if (!supabaseAnonKey) {
  console.error('[v0] Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable. Add it to your .env.local file.')
}

if (!supabaseServiceKey) {
  console.warn('[v0] Missing SUPABASE_SERVICE_ROLE_KEY. If RLS is enabled, form submissions will fail.')
}

// Create Supabase client for server-side operations with service role key
// This bypasses RLS policies and is used for API routes
export const createServerClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Supabase environment variables are not configured. ' +
      'Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env.local file. ' +
      'Refer to DATABASE_SETUP.md for instructions.'
    )
  }
  
  const key = supabaseServiceKey || supabaseAnonKey
  return createClient(supabaseUrl, key)
}

// Initialize the client (reused across requests)
let supabaseClient: ReturnType<typeof createClient> | null = null
let initError: Error | null = null

export const getSupabaseClient = () => {
  if (initError) {
    throw initError
  }
  
  if (!supabaseClient) {
    try {
      supabaseClient = createServerClient()
    } catch (error) {
      initError = error instanceof Error ? error : new Error('Failed to initialize Supabase client')
      throw initError
    }
  }
  return supabaseClient
}
