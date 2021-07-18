import { getRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Group from '@modules/groups/infra/typeorm/models/Group';
import ICreateGroupRepository from '../repositories/groups'
import {inject,injectable} from 'tsyringe';

interface Request {
  type: string;
  description: string;
  cm1: string;
  cm1u: string;
  cm1r1: string;
  cm1r2: string;
  cm1e: string;
  cm2: string;
  cm2c: string;
  cm2e: string;
  cm2r: string;
  cm2u: string;
  cm2d: string;
  cm3: string;
  cm3a1: string;
  cm3a2: string;
  cm3a3: string;
  cm4: string;
  cm4a1: string;
  cm4a2: string;
  cm4a3: string;
  cm5: string;
  cm5a1: string;
  cm5a1c: string;
  cm5a1e: string;
  cm5a1r: string;
  cm5a1u: string;
  cm5a1d:string;
    cm5a2:string;
    cm5a2c:string;
    cm5a2e:string;
    cm5a2r:string;
    cm5a2u:string;
    cm5a2d:string;
    cm5a3:string;
    cm6:string;
    cm6a1:string;
    cm6a1u:string;
    cm6a2:string;
    cm6a2c:string;
    cm6a2u:string;
    cm6a3:string;
    cm6a3u1:string;
    cm6a3u2:string;
    cm6a4:string;
    cm6a4c1:string;
    cm6a4c2:string;
    cm6a4c3:string;
    cm6a5:string;
    cm6a5u1:string;
    cm6a5u2:string;
    cm7:string;
    cm7a1:string;
    cm7a2:string;
    cm8:string;
    cm8a1:string;
    cm8a2:string;
    am1:string;
    am1r1:string;
    am1r2:string;
    am1r3:string;
    am1r4:string;
    am1r5:string;
    am1c1:string;
    am1e:string;
    am2:string;
    am2a1:string;
    am2a1c:string;
    am2a1te:string;
    AM2A2:string;
    AM2A2C:string;
    AM2A2U:string;
    AM2A2D:string;
    AM2A3:string;
    AM2A3U:string;
    AM3:string;
    AM3A1:string;
    AM3A1C:string;
    AM3A1R:string;
    AM3A1E:string;
    AM3A2:string;
    AM3A2R:string;
    AM3A2E:string;
    AM4:string;
    AM4A1:string;
    AM4A1C:string;
AM4A1E:string;
AM4A1R:string;
 AM4A2:string;
AM4A2C:string;
AM4A2U:string;
AM4A2R:string;
AM4A2E:string;

   AM5:string;

   AM6:string;
 AM6U1:string;
 AM6U2:string;
 AM6U3:string;
 AM6U4:string;


}
@injectable()
class UpdateGroupService {
  constructor(
  @inject('GroupRepository')
  private GroupRepository:ICreateGroupRepository){}
  public async execute({
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
    cm4a3,
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
}: Request): Promise<Group> {
    const checkGroupExists = await this.GroupRepository.findByType(
        type
      );
      if (!checkGroupExists) {
        throw new AppError('Group does not exists');
      }

      checkGroupExists.type=type;
      checkGroupExists.description=description;
      checkGroupExists.cm1=cm1;
      checkGroupExists.cm1u=cm1u;
      checkGroupExists.cm1r1=cm1r1;
      checkGroupExists.cm1r2=cm1r2;
      checkGroupExists.cm1e=cm1e;
      checkGroupExists.cm2=cm2;
      checkGroupExists.cm2c=cm2c;
      checkGroupExists.cm2e=cm2e;
      checkGroupExists.cm2r=cm2r;
      checkGroupExists.cm2u=cm2u;
      checkGroupExists.cm2d=cm2d;
      checkGroupExists.cm3=cm3;
      checkGroupExists.  cm3a1=  cm3a1;
      checkGroupExists.  cm3a2=  cm3a2;
      checkGroupExists.  cm3a3=  cm3a3;
      checkGroupExists.   cm4=   cm4;
      checkGroupExists. cm4a1= cm4a1;
      checkGroupExists. cm4a2= cm4a2;
      checkGroupExists.cm4a3= cm4a3;
      checkGroupExists.   cm5=   cm5;
      checkGroupExists. cm5a1= cm5a1;
      checkGroupExists.cm5a1c=cm5a1c;
      checkGroupExists.cm5a1e=cm5a1e;
      checkGroupExists.cm5a1r=cm5a1r;
      checkGroupExists.cm5a1u=cm5a1u;
      checkGroupExists. cm5a1d=cm5a1d;
      checkGroupExists  .cm5a2=cm5a2;
      checkGroupExists .cm5a2c=cm5a2c;
      checkGroupExists .cm5a2e=cm5a2e;
      checkGroupExists .cm5a2r=cm5a2r;
      checkGroupExists .cm5a2u=cm5a2u;
      checkGroupExists .cm5a2d=cm5a2d;
      checkGroupExists  .cm5a3=cm5a3;
      checkGroupExists.    cm6=    cm6;
      checkGroupExists.  cm6a1=  cm6a1;
      checkGroupExists. cm6a1u= cm6a1u;
      checkGroupExists.  cm6a2=  cm6a2;
      checkGroupExists. cm6a2c= cm6a2c;
      checkGroupExists. cm6a2u= cm6a2u;
      checkGroupExists.  cm6a3=  cm6a3;
      checkGroupExists.cm6a3u1=cm6a3u1;
      checkGroupExists.cm6a3u2=cm6a3u2;
      checkGroupExists.  cm6a4=  cm6a4;
      checkGroupExists.cm6a4c1=cm6a4c1;
      checkGroupExists.cm6a4c2=cm6a4c2;
      checkGroupExists.cm6a4c3=cm6a4c3;
      checkGroupExists.  cm6a5=  cm6a5;
      checkGroupExists.cm6a5u1=cm6a5u1;
      checkGroupExists.cm6a5u2=cm6a5u2;
      checkGroupExists.    cm7=    cm7;
      checkGroupExists.  cm7a1=  cm7a1;
      checkGroupExists.  cm7a2=  cm7a2;
      checkGroupExists.    cm8=    cm8;
      checkGroupExists.  cm8a1=  cm8a1;
      checkGroupExists.  cm8a2=  cm8a2;


      checkGroupExists.    am1=    am1;
      checkGroupExists.  am1r1=  am1r1;
      checkGroupExists.  am1r2=  am1r2;
      checkGroupExists.  am1r3=  am1r3;
      checkGroupExists.  am1r4=  am1r4;
      checkGroupExists.  am1r5=  am1r5;
      checkGroupExists.  am1c1=  am1c1;
      checkGroupExists.   am1e=   am1e;
      checkGroupExists.    am2=    am2;
      checkGroupExists.  am2a1=  am2a1;
      checkGroupExists. am2a1c= am2a1c;
      checkGroupExists.am2a1te=am2a1te;
      checkGroupExists.  AM2A2=  AM2A2;
      checkGroupExists. AM2A2C= AM2A2C;
      checkGroupExists. AM2A2U= AM2A2U;
      checkGroupExists. AM2A2D= AM2A2D;
      checkGroupExists.  AM2A3=  AM2A3;
      checkGroupExists. AM2A3U= AM2A3U;
      checkGroupExists.    AM3=    AM3;
      checkGroupExists.  AM3A1=  AM3A1;
      checkGroupExists. AM3A1C= AM3A1C;
      checkGroupExists. AM3A1R= AM3A1R;
      checkGroupExists. AM3A1E= AM3A1E;
      checkGroupExists.  AM3A2=  AM3A2;
      checkGroupExists. AM3A2R= AM3A2R;
      checkGroupExists. AM3A2E= AM3A2E;
      checkGroupExists.    AM4=    AM4;
      checkGroupExists.  AM4A1=  AM4A1;
      checkGroupExists. AM4A1C= AM4A1C;
      checkGroupExists. AM4A1E= AM4A1E;
      checkGroupExists. AM4A1R= AM4A1R;
      checkGroupExists.  AM4A2=  AM4A2;
      checkGroupExists. AM4A2C= AM4A2C;
      checkGroupExists. AM4A2U= AM4A2U;
      checkGroupExists. AM4A2R= AM4A2R;
      checkGroupExists. AM4A2E= AM4A2E;
      checkGroupExists.    AM5=    AM5;
      checkGroupExists.    AM6=    AM6;
      checkGroupExists.  AM6U1=  AM6U1;
      checkGroupExists.  AM6U2=  AM6U2;
      checkGroupExists.  AM6U3=  AM6U3;
      checkGroupExists.  AM6U4=  AM6U4;

    return this.GroupRepository.save(checkGroupExists)
    }
}

export default UpdateGroupService;
