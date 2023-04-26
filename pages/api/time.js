export default function Time(request, response) {
  const today = new Date().toString();
  console.log(today);

  if (request.method == "GET") {
    return response.status(200).json(today);
  }
}
