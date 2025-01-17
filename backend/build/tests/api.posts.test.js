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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("../typeorm/connection"));
var supertest_1 = __importDefault(require("./supertest"));
var login_1 = __importDefault(require("./modules/login"));
describe('main Page', function () {
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        var option, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, connection_1.default.createDatabase()];
                case 1:
                    _a.sent();
                    option = {
                        type: "mysql",
                        host: "localhost",
                        port: 3306,
                        username: process.env.DATABASE_ID,
                        password: process.env.DATABASE_PASSWORD,
                        database: "test",
                        // synchronize: true,
                        // dropSchema: true,
                        // logging: true,
                        entities: ["**/entity/*.ts"],
                        subscribers: ["src/migration/*.ts"],
                        migrations: ["src/migration/*.ts"],
                    };
                    return [4 /*yield*/, connection_1.default.create(option)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    console.error(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    test("POST /api/post/sendPost 200", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cookies, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, login_1.default)(supertest_1.default)];
                case 1:
                    cookies = _a.sent();
                    return [4 /*yield*/, supertest_1.default.post('/api/post/sendPost').set('Cookie', cookies).send({
                            title: "첫 게시글",
                            content: "ㅁㄴㅇㄹㄹㅇㅁㄴㄻㅇㄴㄻㄴㅇㅁㄹㄴㅇㄻㄴㅇ",
                        })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toEqual(201);
                    return [2 /*return*/];
            }
        });
    }); });
    test('GET /api/post/getPost 201', function () { return __awaiter(void 0, void 0, void 0, function () {
        var postUuid, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    postUuid = "a926a3ac-a90d-4a08-b99a-0bcc1b8d1dd3";
                    return [4 /*yield*/, supertest_1.default.post("/api/post/getPost?postUuid=" + postUuid)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toEqual(201);
                    return [2 /*return*/];
            }
        });
    }); });
    test('GET /api/post/getPosts 201', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default.get('/api/post/getPosts')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toEqual(201);
                    return [2 /*return*/];
            }
        });
    }); });
    // test('GET /api/post/getCategoryPosts 201', async () => {
    //     const response = await http.get('/api/post/getPosts')
    //     expect(response.status).toEqual(201);
    // });
    // test('GET /api/post/likeIt 201', async () => {
    //     const response = await http.get('/api/post/getPosts')
    //     expect(response.status).toEqual(201);
    // });
    // test('GET /api/post/getLikeIt 201', async () => {
    //     const response = await http.get('/api/post/getPosts')
    //     expect(response.status).toEqual(201);
    // });
    afterEach(function (done) {
        connection_1.default.close();
        done();
    });
});
//# sourceMappingURL=api.posts.test.js.map