module Exceptions (parse, Field) where

import Prelude
import Data.Maybe as M
import Data.StrMap as SM

newtype Field = Field { field :: Array String, messages :: Array String }

read ∷ ∀ m. String -> SM.StrMap (Array m) -> Array m
read field model = M.fromMaybe [] $ SM.lookup field model

parse ∷ SM.StrMap (Array String) -> Array Field
parse model =  map (\field -> Field { field: [field], messages: read field model }) $ SM.keys model
