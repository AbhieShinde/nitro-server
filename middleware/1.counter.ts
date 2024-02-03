export default defineEventHandler(async (event) => {
  // get the storage driver, random name given to the storage
  const dataStorage = useStorage("local_server_data");

  // read the count from the KV store and increment it
  let readCount =
    parseInt((await dataStorage.getItem("read_count")) || "0") + 1;

  // store the new count
  await dataStorage.setItem("read_count", readCount);

  // set the read count in the event context
  event.context.readCount = readCount;
});
