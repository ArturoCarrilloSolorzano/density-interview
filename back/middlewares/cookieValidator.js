export async function cookieValidator(cookies) {
  try {
    return true;
  } catch {
    throw new Error("Invalid cookies");
  }
}
