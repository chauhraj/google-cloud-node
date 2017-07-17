/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Note: this file is purely for documentation. Any contents are not expected
 * to be loaded as the JS file.
 */

/**
 * KeyRange represents a range of rows in a table or index.
 *
 * A range has a start key and an end key. These keys can be open or
 * closed, indicating if the range includes rows with that key.
 *
 * Keys are represented by lists, where the ith value in the list
 * corresponds to the ith component of the table or index primary key.
 * Individual values are encoded as described {@link here}.
 *
 * For example, consider the following table definition:
 *
 *     CREATE TABLE UserEvents (
 *       UserName STRING(MAX),
 *       EventDate STRING(10)
 *     ) PRIMARY KEY(UserName, EventDate);
 *
 * The following keys name rows in this table:
 *
 *     ["Bob", "2014-09-23"]
 *     ["Alfred", "2015-06-12"]
 *
 * Since the `UserEvents` table's `PRIMARY KEY` clause names two
 * columns, each `UserEvents` key has two elements; the first is the
 * `UserName`, and the second is the `EventDate`.
 *
 * Key ranges with multiple components are interpreted
 * lexicographically by component using the table or index key's declared
 * sort order. For example, the following range returns all events for
 * user `"Bob"` that occurred in the year 2015:
 *
 *     "start_closed": ["Bob", "2015-01-01"]
 *     "end_closed": ["Bob", "2015-12-31"]
 *
 * Start and end keys can omit trailing key components. This affects the
 * inclusion and exclusion of rows that exactly match the provided key
 * components: if the key is closed, then rows that exactly match the
 * provided components are included; if the key is open, then rows
 * that exactly match are not included.
 *
 * For example, the following range includes all events for `"Bob"` that
 * occurred during and after the year 2000:
 *
 *     "start_closed": ["Bob", "2000-01-01"]
 *     "end_closed": ["Bob"]
 *
 * The next example retrieves all events for `"Bob"`:
 *
 *     "start_closed": ["Bob"]
 *     "end_closed": ["Bob"]
 *
 * To retrieve events before the year 2000:
 *
 *     "start_closed": ["Bob"]
 *     "end_open": ["Bob", "2000-01-01"]
 *
 * The following range includes all rows in the table:
 *
 *     "start_closed": []
 *     "end_closed": []
 *
 * This range returns all users whose `UserName` begins with any
 * character from A to C:
 *
 *     "start_closed": ["A"]
 *     "end_open": ["D"]
 *
 * This range returns all users whose `UserName` begins with B:
 *
 *     "start_closed": ["B"]
 *     "end_open": ["C"]
 *
 * Key ranges honor column sort order. For example, suppose a table is
 * defined as follows:
 *
 *     CREATE TABLE DescendingSortedTable {
 *       Key INT64,
 *       ...
 *     ) PRIMARY KEY(Key DESC);
 *
 * The following range retrieves all rows with key values between 1
 * and 100 inclusive:
 *
 *     "start_closed": ["100"]
 *     "end_closed": ["1"]
 *
 * Note that 100 is passed as the start, and 1 is passed as the end,
 * because `Key` is a descending column in the schema.
 *
 * @property {Object} startClosed
 *   If the start is closed, then the range includes all rows whose
 *   first `len(start_closed)` key columns exactly match `start_closed`.
 *
 *   This object should have the same structure as [google.protobuf.ListValue]{@link external:"google.protobuf.ListValue"}
 *
 * @property {Object} startOpen
 *   If the start is open, then the range excludes rows whose first
 *   `len(start_open)` key columns exactly match `start_open`.
 *
 *   This object should have the same structure as [google.protobuf.ListValue]{@link external:"google.protobuf.ListValue"}
 *
 * @property {Object} endClosed
 *   If the end is closed, then the range includes all rows whose
 *   first `len(end_closed)` key columns exactly match `end_closed`.
 *
 *   This object should have the same structure as [google.protobuf.ListValue]{@link external:"google.protobuf.ListValue"}
 *
 * @property {Object} endOpen
 *   If the end is open, then the range excludes rows whose first
 *   `len(end_open)` key columns exactly match `end_open`.
 *
 *   This object should have the same structure as [google.protobuf.ListValue]{@link external:"google.protobuf.ListValue"}
 *
 * @class
 * @see [google.spanner.v1.KeyRange definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/keys.proto}
 */
var KeyRange = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * `KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All
 * the keys are expected to be in the same table or index. The keys need
 * not be sorted in any particular way.
 *
 * If the same key is specified multiple times in the set (for example
 * if two ranges, two keys, or a key and a range overlap), Cloud Spanner
 * behaves as if the key were only specified once.
 *
 * @property {Object[]} keys
 *   A list of specific keys. Entries in `keys` should have exactly as
 *   many elements as there are columns in the primary or index key
 *   with which this `KeySet` is used.  Individual key values are
 *   encoded as described {@link here}.
 *
 *   This object should have the same structure as [google.protobuf.ListValue]{@link external:"google.protobuf.ListValue"}
 *
 * @property {Object[]} ranges
 *   A list of key ranges. See {@link KeyRange} for more information about
 *   key range specifications.
 *
 *   This object should have the same structure as [KeyRange]{@link KeyRange}
 *
 * @property {boolean} all
 *   For convenience `all` can be set to `true` to indicate that this
 *   `KeySet` matches all keys in the table or index. Note that any keys
 *   specified in `keys` or `ranges` are only yielded once.
 *
 * @class
 * @see [google.spanner.v1.KeySet definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/keys.proto}
 */
var KeySet = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};