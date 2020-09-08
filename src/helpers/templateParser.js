import Mustache from 'mustache';

export default (template, data, currentAnswer) => template ? Mustache.render(template, data) : currentAnswer;