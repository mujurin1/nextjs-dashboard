export default async function Page() {
  await new Promise(r => setTimeout(r, 1000));
  return <p>Customers Page</p>;
}
