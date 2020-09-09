import { ApiModel } from '../core';
import { TeamMember } from './team-member.model';


export class Team extends ApiModel {
    public employeeId: string;
    public name: string;
    public teamMembers: Array<TeamMember> = new Array<TeamMember>();
}