<img alt="Django Exceptions" src="media/django-rest-framework.png" width="350" />

> Handle and parse [Django REST Framework validation messages](https://docs.djangoproject.com/en/1.11/ref/forms/validation/) with aplomb.

`npm i django-exceptions --save`

# Getting Started

Django Exceptions will attempt to flatten the validation messages into a single hierarchy, as otherwise the validation messages are infinitely nested, which makes it troublesome to render to HTML. Thus you are guanrateed to have a single array of all validation messages, with a `field` and `messages` key &ndash; both of which themselves are arrays.

```javascript
import { parse } from 'django-exceptions';

const data = await fromApi();

parse(data).forEach(x => {
    console.log('Field:', x.field);
    console.log('Messages:', x.messages);
});
```

In [React](https://github.com/facebook/react) you *might* do something like the following to render the messages:

```javascript
import { parse } from 'django-exceptions';

render() {
    
    return (
        <ul className="messages">

            {parse(this.props.messages).map(x => (
                <li>{x.field.join(' → ')}: {x.messages.join(', ')}</li>
            ))}

        </ul>
    );

}
```

