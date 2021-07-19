import { container } from 'tsyringe';

import ICustomerRepository from '@modules/customer/Repositories/ICustomerRepository';
import CustomerRepository from '@modules/customer/infra/typeorm/repositories/CustomerRepository';

import IUsersRepository from '@modules/users/Repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/users';

import IUpdateUsersRepository from '@modules/users/Repositories/IUpdateUsersRepository';
import UsersUpdateRepository from '@modules/users/infra/typeorm/repositories/usersUpdate';

import IUsersTokensRepository from '@modules/users/Repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import ICreateGroupRepository from '@modules/groups/repositories/groups';
import GroupRepository from '@modules/groups/infra/typeorm/repositories/Group';

import IOrderRepository from '@modules/customer/Repositories/IOrderRepository';
import OrderRepository from '@modules/customer/infra/typeorm/repositories/OrderRepository';

import IRestaurantRepository from '@modules/customer/Repositories/IRestaurantRepository';
import RestaurantRepository from '@modules/customer/infra/typeorm/repositories/RestaurantRepository';

import '@modules/users/providers';
import './providers';

container.registerSingleton<IOrderRepository>(
  'OrderRepository',OrderRepository,
);

container.registerSingleton<IRestaurantRepository>(
  'RestaurantRepository',RestaurantRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',UsersRepository,
);

container.registerSingleton<IUpdateUsersRepository>(
  'UsersUpdateRepository',UsersUpdateRepository,
);

container.registerSingleton<IUsersTokensRepository>(
  'UserTokensRepository',UserTokensRepository,
);

container.registerSingleton<ICustomerRepository>(
  'CustomerRepository',CustomerRepository,
);

