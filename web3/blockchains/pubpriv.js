import * as ed from "@noble/ed25519";

async function main() {
  const privKey = ed.utils.randomPrivateKey();

  const message = new TextEncoder().encode("hello world");

  const pubKey = await ed.getPublicKeyAsync(privKey);

  const signature = await ed.signAsync(message, privKey);

  const isValid = await ed.verifyAsy;
  console.log(isValid);
}

main();
