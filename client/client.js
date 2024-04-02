const PROTO_PATH = "../jobs.proto";

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const JobsService = grpc.loadPackageDefinition(packageDefinition).JobsService;
const client = new JobsService(
    "localhost:30043",
    grpc.credentials.createInsecure()
);

module.exports = client;