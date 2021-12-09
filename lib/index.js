"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var wormhole_sdk_1 = require("@certusone/wormhole-sdk");
var address_1 = require("@ethersproject/address");
var grpc_web_node_http_transport_1 = require("@improbable-eng/grpc-web-node-http-transport");
var ethers_1 = require("ethers");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var chain, rpc, txhash, wh, nft, ethProvider, sendReceipt, sequence, emitter, signedVAA;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                chain = 4;
                rpc = "https://data-seed-prebsc-1-s1.binance.org:8545/";
                txhash = "0x1f7e699f2b1ee9df61459f2904506649abece8bb9a2b3660fb49227ae46edf90";
                wh = "0x68605AD7b15c732a30b1BbC62BE8F2A509D74b4D";
                nft = "0x9f4a371bc75c6d3d1db73ba48e8185080d84b69f";
                ethProvider = new ethers_1.ethers.providers.JsonRpcProvider(rpc);
                return [4 /*yield*/, ethProvider.getTransactionReceipt(txhash)];
            case 1:
                sendReceipt = _a.sent();
                sequence = (0, wormhole_sdk_1.parseSequenceFromLogEth)(sendReceipt, wh);
                emitter = (0, wormhole_sdk_1.getEmitterAddressEth)((0, address_1.getAddress)(nft));
                console.log(emitter, sequence);
                return [4 /*yield*/, (0, wormhole_sdk_1.getSignedVAA)("https://wormhole-v2-testnet-api.certus.one", chain, emitter, sequence, {
                        transport: (0, grpc_web_node_http_transport_1.NodeHttpTransport)(),
                    })];
            case 2:
                signedVAA = (_a.sent()).vaaBytes;
                console.log(Buffer.from(signedVAA).toString("hex"));
                return [2 /*return*/];
        }
    });
}); })();
