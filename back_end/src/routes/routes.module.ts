import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { RouteInMemoryRepository } from '../@core/infra/db/in-memory/route_in_memory.repository';
import { CreateRouteUseCase } from '../@core/application/create_route.use_case';
import { RouteRepositoryInterface } from '../@core/domain/route.repository';
import { ListAllRoutesUseCase } from '../@core/application/list_all_routes.use_case';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { RouteSchema } from '../@core/infra/db/typeorm/route.schema';
import { RouteTypeOrmRepository } from '../@core/infra/db/typeorm/route_typeorm.repository';
import { DataSource } from 'typeorm';
import { Route } from '../@core/domain/route.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RouteSchema])],
  controllers: [RoutesController],
  providers: [
    RoutesService,
    {
      provide: RouteTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new RouteTypeOrmRepository(dataSource.getRepository(Route))
      },
      inject: [getDataSourceToken()]
    },
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository
    },
    {
      provide: CreateRouteUseCase,
      useFactory: (routeRepo: RouteRepositoryInterface) => {
        return new CreateRouteUseCase(routeRepo);
      },
      inject: [RouteTypeOrmRepository]
    },
    {
      provide: ListAllRoutesUseCase,
      useFactory: (routeRepo: RouteRepositoryInterface) => {
        return new ListAllRoutesUseCase(routeRepo);
      },
      inject: [RouteTypeOrmRepository]
    }
  ]
})
export class RoutesModule { }
