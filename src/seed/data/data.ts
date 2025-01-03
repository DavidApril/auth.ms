import * as bcrypt from 'bcrypt';
import { ValidRoles } from 'src/auth/interfaces';
import { CreatePermissionDto } from 'src/permission/dto';
import { CreateRoleDto } from 'src/role/dto';

interface SeedUser {
  email: string;
  password: string;
  roles: ValidRoles[];
  name: string;
}

interface SeedData {
  users: SeedUser[];
  roles: CreateRoleDto[];
  permissions: CreatePermissionDto[];
}

export const initialData: SeedData = {
  users: [
    {
      email: 'admin@example.com',
      password: bcrypt.hashSync('Abc123456@', 10),
      roles: [ValidRoles.ADMIN, ValidRoles.USER],
      name: 'root_user',
    },
    {
      email: 'user@example.com',
      password: bcrypt.hashSync('Abc123456@', 10),
      roles: [ValidRoles.USER],
      name: 'David A.',
    },
    {
      email: 'superadmin@example.com',
      password: bcrypt.hashSync('Abc123456@', 10),
      roles: [ValidRoles.SUPER_ADMIN, ValidRoles.ADMIN, ValidRoles.USER],
      name: 'super_root_user',
    },
  ],
  roles: [
    {
      name: 'root',
      description: 'this is a root user',
    },
    {
      name: 'user',
      description: 'this is a user',
    },
  ],
  permissions: [
    {
      name: 'create.user',
    },
    {
      name: 'update.user',
    },
    {
      name: 'delete.user',
    },
    {
      name: 'read.user',
    },
    {
      name: 'create.role',
    },
    {
      name: 'update.role',
    },
    {
      name: 'delete.role',
    },
    {
      name: 'read.role',
    },
    {
      name: 'create.permission',
    },
    {
      name: 'update.permission',
    },
    {
      name: 'delete.permission',
    },
    {
      name: 'read.permission',
    },
  ],
};
