export function generateRandomText(prefix = "HelloWorld") {
  const randomNum = Math.floor(Math.random() * 100000); 
  return `${prefix}_${randomNum}`;
}
