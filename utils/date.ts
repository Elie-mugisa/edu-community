export default function objectIdToDate(objectId: string): Date {
  // take first 8 chars → parse as hex → convert to seconds
  const timestamp = parseInt(objectId.substring(0, 8), 16);
  return new Date(timestamp * 1000); // convert to ms
}
