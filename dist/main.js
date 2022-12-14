"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Bank App')
        .setDescription('API description for bank app.')
        .setVersion('1.0')
        .addTag('bankApp')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('bankApi', app, document);
    await app.listen(process.env.PORT || "4000", () => {
        console.log("running on port 4000");
    });
}
bootstrap();
//# sourceMappingURL=main.js.map