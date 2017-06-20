module Exceptions (parse, read, Field) where

import Prelude
import Data.Array as A
import Data.Foreign as F
import Data.Maybe as M
import Data.StrMap as SM

newtype Field = Field { field :: Array String, messages :: Array String }
data Lookup = ArrayLookup (Array String) | StrMapLookup (SM.StrMap (Array String)) | Empty

read ∷ Array String → SM.StrMap (Array String) → Field
read field model = case messages of
    ArrayLookup xs  → Field { field: field, messages: xs }
    StrMapLookup xs → read field xs
    Empty           → Field { field: [], messages: [] }
    where
        wrap a = if F.isArray <<< F.toForeign $ a then ArrayLookup a else StrMapLookup a
        messages = case A.head field of
            M.Just x  → M.maybe Empty wrap $ SM.lookup x model
            M.Nothing → Empty

parse ∷ SM.StrMap (Array String) → Array Field
parse model = map (\field → read [field] model) $ SM.keys model
