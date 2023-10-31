// Account info for API
const accessKey = "fk7PIgH-2drDSYgUmSu4TZ5jNZwOYKwJK9aDINURFj4";
const apiURL = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;

export async function fetchRandomImages() {
  try {
    const response = await fetch(`${apiURL}&count=3`);

    if (!response.ok) {
      throw new Error(`HTTP error, status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log(`An error occurred: ${error}`);
  }
}
