<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=@arksouthern/jsx&background=tiles&project=%20" alt="jsx">
</p>

Four core JSX tools designed for Solid JS

## HandleSet

```tsx
import HandleSet from "@arksouthern/jsx/hx";
```
```tsx
<div>
  <HandleSet handlers={{
    caroselNext: () => {...},
    caroselBack: () => {...},
    cardHovering: () => {...},
    cardHoveringEnd: () => {...},
  }}>
    {handlers => 
      <div>
        <button onClick={handlers.caroselBack}>
          Back
        </button>

        <img 
          src={images[currentlySelected]}
          onMouseEnter={handlers.cardHovering} 
          onMouseLeave={handlers.cardHoveringEnd}
        />

        <button onClick={handlers.caroselNext}>
          Next
        </button>
      </div>
    }
  </HandleSet>
</div>
```

## MatchAs

```tsx
import MatchAs from "@arksouthern/jsx/mx";
```
```tsx
type FriendStatus =
  | {as: "followsYou"}
  | {as: "youFollow"}
  | {as: "mutual", daysMutual: number}
  | {as: "none"}
```
```tsx
<div>
  <MatchAs over={friendStatus} match={{
    followsYou: () => (
      <span>Following you</span>
    ),
    youFollow: () => (
      <span>You are following</span>
    ),
    mutual: x => (
      <span>Mutual {x.daysMutual} for days</span>
    ),
    none: () => <></>,
  }} />
</div>
```

## A.* Div

```tsx
import A from "@arksouthern/jsx/ax";
```
### Not Using A.* Div
```tsx
<div>
  <div>
    <div>
      <input placeholder="Search" />
    </div>
    <div>
      <div>
        <button> Back </button>
        <button> Next </button>
      </div>
      <div>
        <button> Help </button>
      </div>
    </div>
  </div>
  <div>
    <MainContent>
  </div>
</div>
```
### A.* Div Example
```tsx
<A.AppPage>
  <A.NavBar>
    <A.LeftSide>
      <input placeholder="Search" />
    </A.LeftSide>
    <A.RightSide>
      <A.HistoryButtons>
        <button> Back </button>
        <button> Next </button>
      </A.HistoryButtons>
      <A.HelpOpener>
        <button> Help </button>
      </A.HelpOpener>
    </A.RightSide>
  </A.NavBar>
  <A.Main>
    <MainContent>
  </A.Main>
</A.AppPage>
```

## VarSet

```tsx
import VarSet from "@arksouthern/jsx/vx";
```
```tsx
<div>
  <VarSet 
    imageUrl={images[currentlySelected].url}
    profile={friends[currentlySelected].profile}
    recentPost={posts.filter(bySelected).sort(byNewest)[0]}
  >
    {props => 
      <a href={props.profile.url}>
        <img src={props.imageUrl}>
        <p>{props.recentPost.previewText}</p>
      </a>
    }
  </HandleSet>
</div>
```