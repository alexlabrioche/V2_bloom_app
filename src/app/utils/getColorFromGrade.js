export default function getColorFromGrade(grade) {
  if (grade <= 8) {
    return "destruct";
  }
  if (grade <= 14) {
    return "medium";
  }
  if (grade <= 20) {
    return "protect";
  }
  return "absence";
}
