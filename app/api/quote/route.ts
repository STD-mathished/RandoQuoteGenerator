// app/api/quote/route.ts
export async function GET() {
  const apiKey = process.env.FAVQS_API_KEY;

  const res = await fetch("https://favqs.com/api/qotd", {
    headers: {
      Authorization: `Token token=${apiKey}`,
    },
    cache: "no-store",
  });

  const data = await res.json();

  return Response.json({
    q: data.quote.body,
    a: data.quote.author,
  });
}
