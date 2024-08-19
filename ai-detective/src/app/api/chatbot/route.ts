import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
    const { userMessage } = await request.json();

    // ruta al archivo JSON
    const filePath = path.join(process.cwd(), 'public', 'chatbotResponses.json');
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const responses = JSON.parse(fileContents).responses;

    // buscar la respuesta correspondiente en el JSON
    const response = responses.find((r: { input: string; output: string }) => r.input.toLowerCase() === userMessage.toLowerCase());

    // si se encuentra una respuesta, devolverla. Si no, devolver un mensaje por defecto.
    return NextResponse.json({ botResponse: response ? response.output : "I'm not sure how to respond to that." });
}



// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(request: NextRequest) {
//     const { userMessage } = await request.json();

//     // llamada a la API de OpenAI para obtener la respuesta del chatbot, por temas economicos nos manejaremos con JSON por ahora :)
//     const openAiResponse = await fetch('https://api.openai.com/v1/completions', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer YOUR_OPENAI_API_KEY`, 
//         },
//         body: JSON.stringify({
//             model: "text-davinci-003",
//             prompt: userMessage,
//             max_tokens: 100,
//         }),
//     });

//     const data = await openAiResponse.json();

//     return NextResponse.json({ botResponse: data.choices[0].text });
// }
