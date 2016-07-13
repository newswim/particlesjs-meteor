##### Demo of newswim:particles

Check the demo.css file for some implementation details.

For one thing, I've wrapped the `#particles-js` div in another div, and have set
`position:absolute` on the parent. This makes the div that particles' canvas
element updates, able to respond to changes in screen size.
