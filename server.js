const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// تشغيل الميدلوير الافتراضية
server.use(middlewares);

// تفعيل المصادقة باستخدام `json-server-auth`
server.db = router.db;
server.use(auth);
server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server with Auth is running on http://localhost:${PORT}`);
});
