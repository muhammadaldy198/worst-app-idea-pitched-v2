import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// PhoneFinder — worst app idea pitch, rebuild #2.
// Tautology murni + biaya aktif: menemukan HP yang sedang dipegang, $1 tiap ketemu.
// Satu kalimat, satu ide: lokasi tautologis, tarif per penemuan, bukti foto tangan sendiri.
const TEXT = "PhoneFinder uses GPS, Bluetooth, and machine learning to locate your phone while you are holding it, and charges $1 every time it finds it, then texts you a photo of your own hand holding the phone you just lost.";

const out = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(out, TEXT, "utf8");
chmodSync(out, 0o644);
