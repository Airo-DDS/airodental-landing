import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const marketingAssistantId = process.env.VAPI_MARKETING_ASSISTANT_ID;
    
    if (!marketingAssistantId) {
      return NextResponse.json(
        { error: 'Marketing assistant ID not configured' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      unintegratedAssistantId: marketingAssistantId, // Using marketing assistant for both for now
      marketingAssistantId: marketingAssistantId,
    });
  } catch (error) {
    console.error('Error fetching assistant config:', error);
    return NextResponse.json(
      { error: 'Failed to fetch assistant configuration' },
      { status: 500 }
    );
  }
} 