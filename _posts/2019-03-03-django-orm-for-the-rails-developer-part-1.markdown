---
layout: post
title:  "Django ORM for the Rails Developer Part 1"
date:   2019-03-04 16:45:10 -0400
categories: jekyll update
image: /assets/images/django-the-cat.png
headerImage: true
tag:
- Django ORM
- Python
- Querying in a Django Project
category: blog
author: jacquelinepotts
---

Querying with the Django ORM: how do we do it? What journeys lie ahead of us? Which queries are more efficient and put less load on a database? Coming from an Active Record and Rails background, the transition and answers to these questions are still an ongoing journey. Below we will discuss some fun queries in Rails and how those might translate to Django; Django ORM for people who aren't familiar with the Django ORM.

---


## Querying for a Single Object
One of the cornerstones of web development is the ability to read and return data from a database.
For the purposes of this post, let's assume we are working side by side with a Rails application with a PostgreSQL database and a Django application with a PostgreSQL database.

Let's say we want to return a single record in our database. For arguments sake, let's say we are working on a blog, we want to return one `post` that has an `id=1`.
<br>
<br>
**Rails - Active Record**

**`find`**

```rconsole
irb(main):003:0> Post.find(1)

[2019-03-04T00:01:56.094388 #4] DEBUG -- :   Post Load (1.2ms)  SELECT  "posts".* FROM "posts" WHERE "posts"."id" = $1 LIMIT $2  [["id", "1"], ["LIMIT", 1]]
=> <#Notification id: "1", author: blogger-jim, live_at: "2018-12-11 16:00:34", created_at: "2018-12-11 04:13:54", updated_at: "2018-12-11 16:00:34", heading: "Just a regular old blog post">
```

In the console, ActiveRecord will show us what `SQL` it has run to execute the given query.

Now if we query for a `post` with an `id=7` that does not exist in our database, active record will let us know by alerting us with a handy `ActiveRecord::RecordNotFound` error:

```rconsole
irb(main):003:0> Post.find(7)

Post Load (0.8ms)  SELECT  "posts".* FROM "posts" WHERE "posts"."id" = $1 LIMIT $2  [["id", nil], ["LIMIT", 1]]
Traceback (most recent call last):
        1: from (irb):1

ActiveRecord::RecordNotFound (Couldnt find Post with 'id'=7)
```

Sound the alarm friends, there is no such object here!
<br>
<br>
**Django ORM**

**`get`**

Now, let's try the same thing in our Django blog, we want to return one `post` that has an `id=1`.

```python
In [1]: from posts.models import Post                                                                    

In [2]: Post.objects.get(pk=1)                                                                   
Out[2]: <Post: Post author: blogger-jim, created: 2018-11-28 14:32:19.956328+00:00>
```
Right off the bat, three things are sticking out to me in my Rails brain, we need to import models into the console?, `.objects`?, and what is a `pk`?

1. What is this importing all about?
<br>
Unlike the Rails console that loads the the majority of the application upon loading, the Django shell requires us to `import` the models, functions, and anything else we want to interact with during our session in the shell.

2. What is this `.objects` deal?
<br>
TLDR; When using Django, `objects` is the _Manager_ of the model, we won't get into too much detail on managers now, but think of a manager as a class method.

For our purposes, when you see the `.objects` call on the `Post` model, we are querying the instances of the objects within that class.

3. What in tarnation is a `pk`?
<br>
`pk` is the object's **primary key**,
aka the `id` of the object in Rails,
aka the database id for the object.

In Django, the convention prefers the use of `pk` over `id`.

<div class="breaker"></div>

If we run the same query using looking for a `pk` that does not exist in our database, we will get an error similar to this:

```python
DoesNotExist    Traceback (most recent call last)
<ipython-input-2-eb4715ec5410> in <module>
----> 1 Post.objects.get(pk=1)

~/.virtualenvs/django-api/lib/python3.6/site-packages/django/db/models/manager.py in manager_method(self, *args, **kwargs)
     80         def create_method(name, method):
     81             def manager_method(self, *args, **kwargs):
---> 82                 return getattr(self.get_queryset(), name)(*args, **kwargs)
     83             manager_method.__name__ = method.__name__
     84             manager_method.__doc__ = method.__doc__

~/.virtualenvs/django-api/lib/python3.6/site-packages/django/db/models/query.py in get(self, *args, **kwargs)
    397             raise self.model.DoesNotExist(
    398                 "%s matching query does not exist. %"
--> 399                 self.model._meta.object_name
    400             )
    401         raise self.model.MultipleObjectsReturned()

DoesNotExist: Post matching query does not exist.
```

---

## Querying for a Single Object - Without Raising Errors and Exploding Everywhere
Now, our first few examples were all fine and dandy but there will be instances when if we don't find a record in our database we don't want an error to be raised and hault all processes.
<br>
<br>
**Rails - Active Record**

**`where`**
```rconsole
irb(main):004:0> Post.where(id: 1)
[2019-03-04T00:07:53.498783 #4] DEBUG -- :   Post Load (0.9ms)  SELECT  "posts".* FROM "posts" WHERE "posts"."id" = $1 LIMIT $2  [["id", "1"], ["LIMIT", 11]]

=> <#ActiveRecord::Relation [<#Post id: 1, author: blogger-jim, live_at: "2018-12-11 16:00:34", created_at: "2018-12-11 04:13:54", updated_at: "2018-12-11 16:00:34", heading: "Just a regular old blog post">]>
```

Something special to note here, take a look at the output we are getting from this query. When using the `where` clause, ActiveRecord will return an `ActiveRecord::Relation` object, which for the purposes of this blog post, is like a special Active Record array. We will need to parse the data as an array of objects always.

Arrays, eh? So what happens if we write a `.where` query that returns nothing?
```rconsole
irb(main):007:0> Post.where(id: 100)
[2019-03-04T00:14:49.323594 #4] DEBUG -- :   Post Load (1.0ms)  SELECT  "posts".* FROM "posts" WHERE "posts"."id" IS NULL LIMIT $1  [["LIMIT", 11]]

=> <#ActiveRecord::Relation []>
```

Note we still get an `ActiveRecord::Relation` object back, but we can see here it returns an empty array if nothing on the database side matches this query. In our code, we will just need to handle an empty array and can skip the error parsing that the `.find` queries will get you.


Unlike with `.find`, using `where` means we get to query by all sorts of attributes not just `id`:

```rconsole
irb(main):004:0> Post.where(author: "blogger-jim")
[2019-03-04T00:07:53.498783] DEBUG -- :   Post Load (0.9ms)  SELECT  "posts".* FROM "posts" WHERE "posts"."author" = $1 LIMIT $2  [["author", "blogger-jim"], ["LIMIT", 11]]

=> <#ActiveRecord::Relation [<#Post id: 1, author: "blogger-jim", live_at: "2018-12-11 16:00:34", created_at: "2018-12-11 04:13:54", updated_at: "2018-12-11 16:00:34", heading: "Just Breathe">]>
```

Also with `where`, we can also get back multiple objects from the database, where our `find` friend will only return a single object always.
<br>
<br>

**Django ORM**

**`filter`**

To mimic the behavior we get with `.where` in Rails, we can use the `.filter` function in the Django ORM.

```python
In [1]: from posts.models import *                                                                    

In [2]: Post.objects.filter(pk=1)                                                                
Out[2]: <QuerySet [<Post: Post author: blogger-jim, created: 2018-11-28 14:32:19.956328+00:00>]>
```

Check it out! Similar to the `where` method, `filter` will return a special type of object, in Django it is called a `QuerySet` and again, for the purposes of this post, we can just treat this as an array of objects.

And just like `.where`, by using `.filter` in Django we can query by different attributes and not just by primary key.

If we run a `.filter` query that doesn't return any results, we will get an empty `QuerySet` back:

```python
In [4]: Post.objects.filter(pk=500)                                                              
Out[4]: <QuerySet []>
```


<div class="breaker"></div>


You, my friend, are well on your way to becoming an ex-rails-django-querying master! Stay tuned for more complicated querying in Django and discussions around query optimizations.
