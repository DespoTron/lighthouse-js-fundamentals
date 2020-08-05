function merge(a,b) {
  return [...a,...b].sort((a,b) => a-b);
}
