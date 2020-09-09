import { ApiModel } from '../core';

export class TeamMember extends ApiModel {
    public name: string;
    public role: string;
    public skills: Array<string> = new Array<string>(); 
}