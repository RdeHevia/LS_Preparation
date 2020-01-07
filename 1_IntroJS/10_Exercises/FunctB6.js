function calculateBMI(heightCm, weightKg) {
  return Math.round(weightKg/(heightCm/100)**2*100)/100;
}

console.log(calculateBMI(180, 80)); 