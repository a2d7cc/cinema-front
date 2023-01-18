### Left Bar

- Create Menu Container Component, Menu Component, MenuItem Component
- writing interface for a menu, menuItem and for a MaterialIcon(react-icon library).
- We are using inside Link component for a navigation, Image from a Next.js for optimisation
- Writing styles
  </br>
  </br>
- Creating MainProvider
  - where we creating QueryClient in Main Provider
  - wrapping at top with QueryClientProvider structure of providers and future components inner

#### Receive Data

- Creating Service for a getAll informationm here for example to get allGenres
- Creating hook useGenres() which return isLoading, data
- in this Hook we are making useQuery request with GenreService and after a bit transorm out data
- Creating 2 Axios: classic, for a secure purpose
  </br>
  </br>

#### Meta & Skeleton library

- Creating Meta component, in this component we are using Head component from next.js
- Adding skeleton loader component, that we are using when the statis isLoading in Component
  - Download library, import skeleton loader, import styles and using it in SkeletonLoadercomponent
    </br>
    </br>

#### Explain flow with providers

- In general we are wrapping in \_app.tsx with MainProvider Component that go from default, this component is a page.

- Inside MainProvider we are making QueryProvider, Layout
- In Layout as a children used Component page, that takes from screen pages folder, that default in nextJs
- In screen pages we are using Meta component to make a unique meta information for each page

</br>
</br>

### Right Bar

- Create SearchList component .tsx, .module.scss
  - Make interface for a incomming data from Server: IMovie, IActor, IGenre...
  - Writting map through incomming movies: createing Link, Image and Describe section html markdown
- Create Search component .tsx, .module.scss
  - Make Hook useSearch with useDebounce functional to make a delay between typing and getting request
    - Export from this hook isSuccess, data, handleSearch(which we provide to a [search-field].tsx to change a value)
  - Create MovieService to get all Movies
  - Creating UI [search-field].tsx component
- Create MovieContainer -> inside will be PopularMovies and Favorites
  - Popular movies get from MovieService and through map will display them in MovieList, MovieItem
- Creating 404 Page without indexing, it's when we are only title provie in props

</br>
</br>

### Redux Toolkit

- yarn add @reduxjs/toolkit react-redux
- Creating store folder and a file store.ts
- Creating root reducer in which we are adding toastrReducer from a library toastr
- Writing TypeRootState in the end of file
- Creating Provider in MainProvider file and wrapping all component with this provider, which </br> take a store as a store prop

### Toast notification

- yarn add react-redux-toastr, yarn add @types/react-redux-toastr
- add styles from library in global.scss file

```scss
@import 'react-redux-toastr/src/styles/index';
```

- Creating ReduxToast component with all configured settings
- Adding in MainProvider

</br>
</br>

### Progress bar on loading pages

- install progress bar library

```
yarn add nextjs-progressbar
```

- Creating HeadProvider component in will be NextProgressBar component from a library
- In HeadProvider writting Head component with some meta information
- Adding Favicons component
- Wrapping MainProvider with HeadProvider

</br>
</br>

### React Hook Form

```
yarn add react-hook-form
```

- Creating AuthPage, which contains Auth Component
- Hooks: useAuth to get state about user, useAuthRedirect to redirect after login, registration back
- through useStae we can detect Login or Register behavior
- useForm to get register, handleSubmit, formState, reset
- creating login, register functions
- describe onSubmit function
- writing html structure Meta-> section>form->Heading+fields
- Creating Button component
- Creating Field component and writing Interface that contains default InputHTMLAttributes & own interface with placeholder and error from reactHookForm
- Making Structure with ForwardRef - wrapping component and also write Field.name = 'Field', while because of ForwardRef component forgot who he is
- Writing AuthFields Component and interface which take from useForm: register, formState, isPasswordRequired(while we will use this component also for a editing)

```
npm install -D @tailwindcss/forms @tailwindcss/aspect-ratio
```

- Add this libraries to a plugin with require in tailwind.config.js

#### Resume

we are creating AuthComponent where initialise useForm; handlerSubmit go inside these form; to provide all register function correct </br>
we are making with ForwardRef Field Component, and in component AuthField we are taking from state errors, provided register function and pass further to a Field Component

</br>
</br>

### Redux Authorisation

- Create User folder in Store folder with files: user.slice.ts, user.interface.ts, user.actions.ts
- Describing user.slice.ts: createSlice with InitialState
- getStoreLocal - to get from a lcoal storage user data, if it's present
- in useSlice writing for async action extraReducers
- adding in root reducer another reducer, that we are exporting from useSlice through destructing
- Desctibe user actions: login, logout, register, checkAuth with createAsyncThink
- Create AuthService
- Create AuthHelper for a differents type of read/write data from localStorage, Cookie

```
yarn add js-cookie
```

- Api helper to delcare that we application-json data recieve
- Toast error function to display errors

</br>
- createing rootActions file where we are importing actions from userActions
- Creating allActions object
- Creating hook useActions: we are making it to bind actions to dispatch
- Creating useTypedSelector

</br>
</br>
- Creating AuthItems components, which provide menu items in left bar: profile, login, logout, admin panel

#### Flow

- Reducer import in rootReducer from userSlice,
- In userSlice we are having extraReducer, that habe a pending, fulfilled, rejected state for async actions
- These actions we are importing from user.actions.ts, where we are creating with createAsyncThink all logic
- From these user actions we are calling the AuthService, where we are making request through axios
- And these actions we are binding with useActions hook to dispatch
- By calling these actions in redux, in localStorage, in Cookie put user data
  </br>
  </br>
- in Auth Component receive user data throught useAuth hook, that take from state simple user data
- And calling in Auth component all writed acitons

### Axios

- Axios Classic
- Axios Instance
  - Writing interceptors logic for Axios Instance on request, response

### AuthProvider

- Creating AuthProvider
- We are writing useEffect to check accessToken and then call checkAuth to get new Tokens, when the app firstly load
- We are checking refreshToken when changing page
- Creating auth.types where we making type for admin, user visibility and combine it with default interface for a page in nextjs
- Creating CheckRole where we are receiving isOnlyAdmin, isOnlyUser property that we added with auth.types
  - We are writting too some logic about checking permission
    </br>
    </br>
- Wrapping Layout with AuthProvider
- Through page component from \_app.tsx to MainProvider, and from MainProvider to the AuthProvider
- AuthProvider recieve main page component and without additional auth props return page </br>
  or dynamic through CheckRole component load a page

So some logic in AuthProvider, and then some logic in CheckRole for a admin, client pages and we are providing with types </br>
modification to a basic page and then through structure forwarding tpage component to AuthProvider

### Create Statistics

- Create pages/manage folder ./index.tsx : nextjs default folder for a pages
- Create app/screens/admin folder -> Admin components by default Statistics component -> ./statistics -> CountUsers component and PopularMovie</br>
  with CountUsers component and PopularMovie component that called in Statistic component

```
pages/manage/index.tsx -> components/screens/admin/Admin.tsx -> ./statistics/Statistics.tsx -> ./CountUsers & ./PopularMovie
```

- Create AdminService for a requests
- In components writting useQuery hook to get isLoading, data

#### AdminNavigation

- create AdminNavigation in ui folder -> map from data with AdminNavItem components
  - create AdminNavItem -> structure: link>a
  - create admin-navigation.interface.ts
  - create admin-navigation.data.ts
- create folders with pages in /pages/manage for links that in menu, and these comonents will refer to app/components/screens
  - Using Meta inside and Heading component
    </br></br>
- writing styles

### List of users and deleting

- Creating new ui elements for admin pages
  - Creating AdminHeader with Interface
    - Creating Button Component
- Import AdminHeader in UserList Component
- Writing useUsers hook to get allUsers, to deleteUser
- Create UserService with these functionality
  </br>
- Create AdminTable, AdminTableHeader, AdminTableItem, AdminActions

### Creating other pages: Movies, Genres, Actors

- We are copying file from UserList, useUsers and modife for these pages purpose
- Also creating services for these pages

### Creating GenreEdit Page and useGenreEdit hook

- Creating hook
  - useRouter for a push, genreId
  - using useQuery request to get data
    - we are using provided from props setValue, it's from hook-form library
    - through keys of object making setValue
  - using useQuery request to update mutate data - onSuccess push to GenreList to see result
    </br></br>
- GenreEdit structure
  - useForm hook
  - useGenreEdit(setValue) hook
  - creating <form></form> with handleSubmit and in form, registrieren <Field>

### draft.js

- npm i draft-js draftjs-to-html html-to-draftjs react-draft-wysiwyg sting-strip-html
- writting types in form.interface.ts
- some setting and configuring text editor

### Creating Genre

- in useGenre hook creating createAsync method, which referr to GenreService create method
  - onSuccess notify and push to edit page
- in GenreList throught to AdminHeader this createAsync method, then thorught to AdminCreateButton
- in EditPage we are having form, and on form method which update information of genre and then push to EditList page

### Copy genre to other Entity like Movie, Genre

- Copy from useGenre create method to useMovie, useActor, also from GenreService create method to MovieService, ActorService
- Copy genre folder in screens, and then rename genre to actor, movie in interfaces
- Change name in useMovieEdit, useActorEdit from Genre, genre
- Change name in MovieEdit, ActorEdit from Genre, genre
- copy in pages dafeult folder for nextjs genre->edit-<[id].tsx>

### Upload File

- UploadService
- Create in ui/form-elements UploadField folder
- Creating hook useUpload with useMutation that call upload service and handleFunction to make from file form data and then </br>
  call useMutation with this data
- Creating UploadField.tsx with interface
- Adding through Controller from useForm in ActorEdit form fields

### Reselect

- Writting Hooks
  - useAdminGenre
  - useAdminActor
- Creating in UI folder for a Select component
- Writting Interface
- Writting Select.tsx component

### Slider

- install react-transition-group
- writting slider types
- useSlider hook where there are all logic and export function, variable
- SliderArrow component
- SliderItem component
- Slider component
- Writting animation
- in screens/Home import Slider
- in main page Home writting getStaticProps to get from server movies and through this data to Home component

### Gallery

- Creating gallery folder in ui
  - Gallery Interface
  - Gallery Component
  - Gallery Item component
- in index Page
- load data for trrending movies, actors from getStaticProps
- and through map transforming data
- adding this values to return {}

### Catalog

- install library html-react-parser
- writting in ui folder catalog-movies
- writting styles, interface, component

- creating fresh in default nextjs page folder
- creating trending page

### Profile

- profile pages default nextjs refer to Probile component
  </br>
- create Profile component in screens folder
- create interface
- create useProfile
  </br>
- create a user folder in pages/manage folder for a admin area !forgot to make it before

### Movie Page

- Creating in default pages folder by slug movie folder
- Writing getStaticProps, getsStaticPaths and return SingleMovie component
- Writting SingleMovie component
- Writting Banner component
- Writting Content component, part of single movie page
- Writting ContentList component

### Video Player

- creating in ui: VideoPlayer, useVideo, types
- creating AuthPlaceholder folder with AuthPlaceholder component, AuthButton component
- AuthButton make redirect, after succefull auth process
  </br>
- useVideo
  - Play Button
  - forward, revert 10s
  - fullscreen
  - hotkeys: space, f, arrows left, right,
- videoRef to element
- state for isPlaying, setCurrentTime, setVideoTime, setProgress
- videoRef.current it's default to video tag element
- writting useEffects to control functional of a player
- with dynamic attach videoplayer in SingleMovie component

### Rate Movie

- Creating RateMovie folder in single-movie folder
- install react-star-rating-component
- Creating rating service
- wrtting useRating hook
- useState rating
- useState isSenden for a popup
- Writting react-query function to get value(with refetch, to have actualise data), mutate to update
- Creating Rating component
- install npm i -D @types/react-star-rating-component
