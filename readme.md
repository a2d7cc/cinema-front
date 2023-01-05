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
