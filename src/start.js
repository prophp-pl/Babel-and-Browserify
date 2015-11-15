import {normalize} from 'path'
import Person from './person'

console.log(normalize('/foo/bar//baz/asdf/quux/..'));

let p = new Person('Adam');
alert('A jego imię to ' + p.name);

p.name = 'Ewa';

console.log('Jej z kolei ' + p.name);
