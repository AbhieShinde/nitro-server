export default eventHandler((event) => {
  // event.context was set by middlewares
  return {
    message: `${event.context.user.name} is Awesome!`,
    read_count: event.context.readCount,
  };
});
