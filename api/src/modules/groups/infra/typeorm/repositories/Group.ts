import { getRepository, Repository } from 'typeorm';
import ICreateGroupRepository from '@modules/groups/repositories/groups'

import Group from '../models/Group';
import Groups from '../models/Group';

import IcreateGroupDTO from '@modules/groups/dtos/ICreateGroupDTO';

class GroupRepository implements ICreateGroupRepository {
private ormRepository:Repository<Group>;
constructor(){

this.ormRepository=getRepository(Group);
}

public async findById(id:string):Promise<Group | undefined>{

    const findgroups = await this.ormRepository.findOne({

        where:{id}
    });

return findgroups;
}

public async findByType(type:string):Promise<Group | undefined>{

    const findgroups = await this.ormRepository.findOne({

        where:{type}
    });

return findgroups;
}
public async create ({
    type,
    description,
    cm1,
    cm1u,
    cm1r1,
    cm1r2,
    cm1e,
    cm2,
    cm2c,
    cm2e,
    cm2r,
    cm2u,
    cm2d,
    cm3,
    cm3a1,
    cm3a2,
    cm3a3,
    cm4,
    cm4a1,
    cm4a2,
    cm5,
    cm5a1,
    cm5a1c,
    cm5a1e,
    cm5a1r,
    cm5a1u,
    cm5a1d,
    cm5a2,
    cm5a2c,
    cm5a2e,
    cm5a2r,
    cm5a2u,
    cm5a2d,
    cm5a3,
    cm6,
    cm6a1,
    cm6a1u,
    cm6a2,
    cm6a2c,
    cm6a2u,
    cm6a3,
    cm6a3u1,
    cm6a3u2,
    cm6a4,
    cm6a4c1,
    cm6a4c2,
    cm6a4c3,
    cm6a5,
    cm6a5u1,
    cm6a5u2,
    cm7,
    cm7a1,
    cm7a2,
    cm8,
    cm8a1,
    cm8a2,
    am1,
        am1r1,
        am1r2,
        am1r3,
        am1r4,
        am1r5,
        am1c1,
         am1e,
          am2,
        am2a1,
       am2a1c,
      am2a1te,
        AM2A2,
       AM2A2C,
       AM2A2U,
       AM2A2D,
        AM2A3,
       AM2A3U,
          AM3,
        AM3A1,
       AM3A1C,
       AM3A1R,
       AM3A1E,
        AM3A2,
       AM3A2R,
       AM3A2E,
          AM4,
        AM4A1,
       AM4A1C,
       AM4A1E,
       AM4A1R,
        AM4A2,
       AM4A2C,
       AM4A2U,
       AM4A2R,
       AM4A2E,
        AM5,

        AM6,
        AM6U1,
        AM6U2,
        AM6U3,
        AM6U4,
  }: IcreateGroupDTO):Promise<Group>{

        const groups=this.ormRepository.create({

            type,
            description,
            cm1,
            cm1u,
            cm1r1,
            cm1r2,
            cm1e,
            cm2,
            cm2c,
            cm2e,
            cm2r,
            cm2u,
            cm2d,
            cm3,
            cm3a1,
            cm3a2,
            cm3a3,
            cm4,
            cm4a1,
            cm4a2,
            cm5,
            cm5a1,
            cm5a1c,
            cm5a1e,
            cm5a1r,
            cm5a1u,
            cm5a1d,
            cm5a2,
            cm5a2c,
            cm5a2e,
            cm5a2r,
            cm5a2u,
            cm5a2d,
            cm5a3,
            cm6,
            cm6a1,
            cm6a1u,
            cm6a2,
            cm6a2c,
            cm6a2u,
            cm6a3,
            cm6a3u1,
            cm6a3u2,
            cm6a4,
            cm6a4c1,
            cm6a4c2,
            cm6a4c3,
            cm6a5,
            cm6a5u1,
            cm6a5u2,
            cm7,
            cm7a1,
            cm7a2,
            cm8,
            cm8a1,
            cm8a2,
            am1,
        am1r1,
        am1r2,
        am1r3,
        am1r4,
        am1r5,
        am1c1,
         am1e,
          am2,
        am2a1,
       am2a1c,
      am2a1te,
        AM2A2,
       AM2A2C,
       AM2A2U,
       AM2A2D,
        AM2A3,
       AM2A3U,
          AM3,
        AM3A1,
       AM3A1C,
       AM3A1R,
       AM3A1E,
        AM3A2,
       AM3A2R,
       AM3A2E,
          AM4,
        AM4A1,
       AM4A1C,
       AM4A1E,
       AM4A1R,
        AM4A2,
       AM4A2C,
       AM4A2U,
       AM4A2R,
       AM4A2E,
        AM5,

        AM6,
        AM6U1,
        AM6U2,
        AM6U3,
        AM6U4,
        });
    await this.ormRepository.save(groups);
    return groups;
    }
    public async save(groups:Groups):Promise<Groups>{
        await this.ormRepository.save(groups)
        return groups;
    }
public async find(groups:Group):Promise<Groups> {

    await this.ormRepository.find(groups);
    return groups;
}

}
export default GroupRepository;
