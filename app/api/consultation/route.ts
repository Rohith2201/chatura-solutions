import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseClient } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, target_country, target_university, education_level } = body

    // Validate required fields
    if (!name || !email || !phone || !education_level) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get Supabase client
    const supabase = getSupabaseClient()

    // Insert consultation request into database
    const { error, data } = await supabase
      .from('consultations')
      .insert([
        {
          name,
          email,
          phone,
          target_country,
          target_university,
          education_level,
        },
      ])
      .select()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to submit consultation form' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Consultation request submitted successfully',
        data 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
