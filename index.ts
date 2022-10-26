class Person {
    name!:string
    surname!:string
    constructor(name:string,surname:string){
        this.surname = surname
        this.name=name
    }
}
class Employee {
    surname:string
    name:string
    constructor(name:string,surname:string) {
        this.surname = surname
        this.name=name
    }
}
class Director {
    private _managers: Managers[]=[]
    public getMenegers(): Managers[] {
        return this._managers
    }
    public setMenegers(manager:Managers) {
        this._managers.push(manager)
    }
    public getProjects() {
        let projects = []
        for (let i = 0; i < this._managers.length; i++) {
            projects.push(this._managers[i].projects)
        }
        return projects
    }
}

class Managers {
    name!: string
    surname!: string
    projects:Projects[]=[]
    constructor(name: string, surname: string) {
        this.surname = surname
        this.name = name
    }
    public setProject(project:Projects) {
        this.projects.push(project)
    }

    getProject() {
        return   this.projects
    }
    public getTeamLeads() {
        let teamLead = []
        for (let i = 0; i < this.projects.length; i++) {
            teamLead.push(this.projects[i].teamlid)
        }
        return teamLead
    }

}

class Projects {
    name!:string
    duration!:number
    teamlid:TeamLid[]=[]

    constructor(name:string,duration:number) {
        this.name = name
        this.duration = duration
    }

    public setTeamLid(lid:TeamLid) {
        this.teamlid.push(lid)
    }


    getTeamLid() {
        return  this.teamlid
    }
    public getDev() {
        let developer = []
        for (let i = 0; i < this.teamlid.length; i++) {
            developer.push(this.teamlid[i].developers)
        }
        return developer
    }

}
class TeamLid{
    name!:string
    surname!:string
    developers:Developer[]=[]

    constructor(name:string,surname:string) {
        this.name = name
        this.surname = surname
    }

    public setDeveloper(dev:Developer){
        this.developers.push(dev)
    }
    public getDevelopers(){
        return  this.developers
    }
}

class Developer{
    name!:string
    surname!:string
    constructor(name:string,surname:string) {
        this.name = name
        this.surname = surname
    }
}
let developer = new Developer('abo','petoyan')
let teamlid = new TeamLid('edgar','hohann')
let project = new Projects('admin',23)
let project1 = new Projects('dfwre',43)
let manager = new Managers('aram','mnkj')
let director = new Director()




console.log('Manages',director.getMenegers())
director.setMenegers(manager)
console.log('Manages1',director.getMenegers())
manager.setProject(project)
console.log('director project',director.getProjects())
manager.setProject(project)
console.log('manager projects',manager.getProject())
project.setTeamLid(teamlid)
teamlid.setDeveloper(developer)
console.log('Manager teamlid', manager.getTeamLeads())
teamlid.setDeveloper(developer)
console.log('Team lid developers ', teamlid.getDevelopers())

