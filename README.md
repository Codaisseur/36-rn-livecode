# React Native recap + livecode

Class 36, 2 Apr 2020

## HOWTO

Summary:

- example of a simple React Native app
- built with Expo
- uses a FlatList to render a list of things
- has a basic TabNavigator navigation structure
- passes route params on navigation
- also, for some reason, includes a single styled-components View (not really sure why)

## Differences w/ web

- testing
- more restarting
  - shake device, then "reload" 70%
  - npm run start = restart expo cli
  - close the app
  - restart expo app
  - press R in the terminal
  - make an edit, save the file again
- styling is different
- different JSX elements -> host components
- way more sensors that you can use
- Flexbox has different default axis
  - on the web: flexDirection defaults to "row"
  - on RN: flexDirection defaults to "column"
- images have default sizing on web, 0x0 in RN

## Similarities w/ web

- console -> terminal
- same old react state, components, same hooks, returns, etc.
- also has styling
- normal imports
- styling uses Flexbox, which is also a standard on the web
- you don't get grid
- relative/absolute positiong, for example:

  ```
  <View style={{ position: "relative" }}>
    <Icon />
    <Text>Schopping cart</Text>
    <View style={{
      position: "absolute",
      top: -2,
      right: -2,
      backgroundColor: "red",
      borderRadius: 5
    }}>
      <Text style={{ color: "white" }}>3</Text>
    </View>
  </View>
  ```

## Flexbox

Flexbox has 2 axis:

- primary axis ("column" / "row"), `justifyContent`
- secondary axis, `alignItems`

## Publishing to app stores

iOS:

- it's really hard
- official way, via the app store, costs money (developer licens)

Android:

- official way is free, via the app store
- unofficial way is also easier (F-Droid), make and distribute .apk file

Windows Phone: no idea

## FlatLists

- instead of what?

  - instead of a ScrollView
  - instead of .map

- y tho?
  - performance

Typical .map:

- just a few items, all in view
- list of badges / hashtags on an article

Typical FlatList

- lots of items, "infinite scroll"
- blog of articles
- list of product

React Native can be "smart" about it. It doesn't have to render all 1000 items in a case like this:

```
<FlatList
  data={arrayof1000items}
  renderItem={({ item }) => {
    // render the item
  }}
  keyExtractor={fn}
/>
```

whereas if you use a map it has to:

```
{arrayof1000items.map(item => {
  // render the item
})}
```

## Livecoding screencast

https://drive.google.com/file/d/14aaa4FdqNVxvQdwcKVxcMy2zowKa3rws/view?usp=sharing
