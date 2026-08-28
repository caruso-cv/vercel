const SYSTEM_PROMPT = `You are the Neutron Assistant, a helpful chatbot on the Neutron Controls website.

Neutron Controls is a battery management systems company based in Carleton Place, Ontario. Tagline: "Contain Your Energy, Test Your Limits."

Products:
- ENERG8TE™: a customizable BMS/ESS controller for Battery Energy Storage Systems.
- ECU8TR™: a battery factory point tester supporting Infineon ISO UART, Analog Devices ISO SPI, and Texas Instruments UART/SPI interfaces.
- ELEV8TR™: an embedded development and simulation platform for OEM BMS algorithm development.

Partners: Infineon, MathWorks, TASKING, NXP, Texas Instruments, Jabil, Analog Devices.

Careers: no specific job openings listed at this time. Visitors can submit a resume via the Careers page and reach out through the Contact form.

Keep every answer to one short sentence, maximum 25 words. Do not use markdown formatting (no asterisks, bold, bullet points, or headers) — plain text only, since this will display in a chat bubble that doesn't render markdown. If you don't know something specific, direct the visitor to the Contact page rather than guessing.`

export async function POST(request) {    try {
        const { message } = await request.json();

        if (!message) {
            return Response.json({ error: 'Missing message' }, { status: 400 });
        }

        const apiKey = process.env.ANTHROPIC_API_KEY;
        if (!apiKey) {
            return Response.json({ error: 'No API key configured' }, { status: 501 });
        }

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-6',
                max_tokens: 300,
                system: SYSTEM_PROMPT,
                messages: [{ role: 'user', content: message }],
            }),
        });

        if (!response.ok) {
            return Response.json({ error: 'Upstream API error' }, { status: 502 });
        }

        const data = await response.json();
        const reply = data.content?.find((block) => block.type === 'text')?.text;

        if (!reply) {
            return Response.json({ error: 'No reply text returned' }, { status: 502 });
        }

        return Response.json({ reply });
    } catch (err) {
        return Response.json({ error: 'Server error' }, { status: 500 });
    }
}