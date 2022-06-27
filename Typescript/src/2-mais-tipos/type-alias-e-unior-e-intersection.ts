type user ={
    name: string;
    lastname: string;
    birthday: string;
    age?: number;
}

const katianne: user = {
    name: 'Katianne',
    lastname: 'Araújo',
    birthday: '23/09/1999',
    age: 22
}

// Unions types
// | (Como se fosse o  ||)

type LogLevel = 'info' | 'error' | 'debug';

function LogMessage(message: string, level: LogLevel){
    console.log(`[${level}] - ${message}`)
}

LogMessage('Uma mensagem info', 'error')
LogMessage('Uma mensagem info', 'info')
LogMessage('Uma mensagem info', 'debug')


//intesection types: &
type About ={
    bio: string;
    interests: string[]
}

type Profile = user & About;
const userWithProfile: Profile = {
    name: 'Katanne',
    lastname: 'Araújo',
    birthday: '23/09/1999',
    bio: 'Ola meu nome é Katianne',
    interests: ['html', 'css', 'JavaScript']

}

type ComposedProfile = user &{
    log: LogLevel;
}