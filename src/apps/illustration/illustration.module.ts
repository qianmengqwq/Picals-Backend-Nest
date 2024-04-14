import { Module } from '@nestjs/common';
import { IllustrationService } from './illustration.service';
import { IllustrationController } from './illustration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Illustration } from './entities/illustration.entity';
import { LabelService } from '../label/label.service';
import { IllustratorService } from '../illustrator/illustrator.service';
import { Label } from '../label/entities/label.entity';
import { Illustrator } from '../illustrator/entities/illustrator.entity';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Illustration, Label, Illustrator, User])],
  controllers: [IllustrationController],
  providers: [
    IllustrationService,
    LabelService,
    IllustratorService,
    UserService,
  ],
})
export class IllustrationModule {}
