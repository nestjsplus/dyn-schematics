/**
 *  If you're building a standalone npm package hosting a dynamic module, you
 *  should delete this file.  Its only purpose is to bootstrap the app so that
 *  you can run the quick verification test (see <%= lowerCase(name) %>-client/<%= lowerCase(name) %>-client.module.ts)
 */
import { NestFactory } from '@nestjs/core';
import { <%= classify(name) %>ClientModule } from './<%= lowerCase(name) %>-client/<%= lowerCase(name) %>-client.module';

async function bootstrap() {
  const app = await NestFactory.create(<%= classify(name) %>ClientModule);
  await app.listen(3000);
}
bootstrap();
