export const handleResponse= ({ response }: { response: unknown }) => {
  if (response instanceof Response) return response;

  if (
    response !== null &&
    typeof response === 'object' &&
    'success' in response &&
    'data' in response
  ) {
    return Response.json(response);
  }

  return Response.json({
    success: true,
    data: response ?? null,
  });
};
