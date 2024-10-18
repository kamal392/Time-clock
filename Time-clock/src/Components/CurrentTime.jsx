function CurrentTime() {
  let time = new Date();
  return (
    <p className="lead">
      Today is {time.toLocaleDateString()} , {time.toLocaleTimeString()}
    </p>
  );
}
export default CurrentTime;
