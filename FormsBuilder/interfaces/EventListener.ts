export default interface EventListener {
  name: string;
  active: boolean;
  callback();
}
